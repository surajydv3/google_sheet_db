from flask import Flask, request
from flask_cors import CORS, cross_origin
import gspread

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/", methods = ['POST', 'GET'])
@cross_origin(supports_credentials=True)
def add_contact():
    sa = gspread.service_account(filename='/Users/surajyadav/Downloads/expanded-theory-375216-03aee9e62d04.json')
    sh = sa.open("db")

    wks = sh.worksheet("Sheet1")
    row = wks.row_count
    wks.append_row([request.json['name'], request.json['phone']], table_range=f"A{row+1}:B{row+1}") 
    return "success"
if __name__ == "__main__":
  app.run(host='0.0.0.0', debug=False)