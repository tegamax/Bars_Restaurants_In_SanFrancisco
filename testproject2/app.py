from flask import Flask, render_template, jsonify, request

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd
import json
from pprint import pprint


# database connection
engine = create_engine("sqlite:///3rd.db")
Base = automap_base()
Base.prepare(engine, reflect=True)

businesses = Base.classes.maintable

session = Session(engine)


app = Flask(__name__)

# creating routes for all our webpages
@app.route('/')
def index_route():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard_route():
    return render_template('dashboard.html')


@app.route('/OtherCharts')
def OtherCharts_route():
    return render_template('OtherCharts.html')


@app.route('/data/jsondata')
def establishments_route():
# this route creates our "api" that we will pull from in our javascript files
    response = session.query(businesses).all()

    results = []
    for row in response:
        row_dict = {
            'RowId': row.RowID,
            'City': row.City,
            'Category': row.Category,
            'Lat': row.Latitude,
            'Long': row.Longitude,
            'Name': row.Name,
            'Phone': row.Phone,
            'Rating': row.Rating,
            'Price': row.Price,
            'Reviews': row.Reviews,


    }
        results.append(row_dict)

    return jsonify(results)


if __name__ == "__main__":
    app.run(debug=True)
