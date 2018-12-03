
from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/elec")
def electronics():
    pass


@app.route("/web")
def web():
    pass


@app.route("/educ")
def educ():
    pass


@app.route("/educ/phy")
def educ_phy():
    pass


@app.route("/about")
def about():
    pass


if __name__ == '__main__':
    app.run(debug=True)
