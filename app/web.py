
from flask import Flask, render_template, url_for, Response
from flask import request


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/google0af444ae00950439.html")
def gooc():
    return render_template("google0af444ae00950439.html")

@app.route("/google0af444ae00950439")
def gooc():
    return render_template("google0af444ae00950439.html")


@app.route("/web")
def web():
    return render_template("web/index.html")


@app.route("/elec")
def elec():
    pass


@app.route("/educ")
def educ():
    return render_template("educ/index.html")


@app.route("/educ/phy")
def educ_phy():
    return render_template("educ/phy/index.html")


@app.route("/educ/phy/o")
def educ_phy_o():
    return render_template("educ/phy/o/index.html")


@app.route("/about")
def about():
    return render_template("about/index.html")


if __name__ == '__main__':
    app.run(debug=True)
