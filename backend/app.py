from flask import Flask, jsonify, request
from flask_cors import CORS

from legacy import state, create_order


app = Flask(__name__)
CORS(app)


@app.get("/api/products")
def get_products():
    return jsonify(list(state["products"].values()))


@app.get("/api/orders")
def get_orders():
    return jsonify(state["orders"])


@app.post("/api/orders")
def create_order_endpoint():
    data = request.json

    product_id = data.get("product_id")
    quantity = data.get("quantity", 1)

    result = create_order(product_id, quantity)

    if not result["success"]:
        return jsonify(result), 400

    return jsonify(result), 201


@app.get("/api/inventory")
def get_inventory():
    products = []

    for product in state["products"].values():
        products.append({
            "id": product["id"],
            "name": product["name"],
            "stock": product["stock"]
        })

    return jsonify(products)


if __name__ == "__main__":
    app.run(
        debug=True,
        threaded=True
    )