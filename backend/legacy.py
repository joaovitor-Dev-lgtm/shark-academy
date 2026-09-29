import time


# ESTADO GLOBAL COMPARTILHADO
state = {
    "products": {
        1: {
            "id": 1,
            "name": "Notebook",
            "price": 3500.00,
            "stock": 1
        }
    },
    "orders": []
}


def create_order(product_id, quantity):
    product = state["products"].get(product_id)

    if product is None:
        return {
            "success": False,
            "message": "Produto não encontrado"
        }

    # Verificação do estoque
    if product["stock"] < quantity:
        return {
            "success": False,
            "message": "Estoque insuficiente"
        }

    # Simula um processamento demorado
    time.sleep(0.5)

    # ALTERAÇÃO DIRETA DO ESTADO GLOBAL
    product["stock"] -= quantity

    order = {
        "id": len(state["orders"]) + 1,
        "product_id": product_id,
        "quantity": quantity,
        "status": "approved"
    }

    state["orders"].append(order)

    return {
        "success": True,
        "order": order
    }