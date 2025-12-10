from flask import Flask, request, render_template

app = Flask(__name__)

def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)

    if bmi < 18.5:
        category = "Underweight"
    elif 18.5 <= bmi < 24.9:
        category = "Normal weight"
    elif 25 <= bmi < 29.9:
        category = "Overweight"
    else:
        category = "Obese"

    return round(bmi, 2), category


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/calculate", methods=["POST"])
def calculate():
    name = request.form["name"]
    weight = float(request.form["weight"])
    height = float(request.form["height"])

    bmi, category = calculate_bmi(weight, height)

    return render_template("index.html", result={
        "name": name,
        "bmi": bmi,
        "category": category
    })


if __name__ == "__main__":
    app.run(debug=True)