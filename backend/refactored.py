import threading


class Inventory:
    def __init__(self):
        self.products = {
            1: {
                "id": 1,
                "name": "Notebook",
                "price": 3500.00,
                "stock": 1
            }
        }

        self.lock = threading.Lock()

    def get_product(self, product_id):
        return self.products.get(product_id)

    def reserve_stock(self, product_id, quantity):

        with self.lock:

            product = self.products.get(product_id)

            if product is None:
                return False

            if product["stock"] < quantity:
                return False

            product["stock"] -= quantity

            return True

    def get_stock(self, product_id):
        product = self.products.get(product_id)

        if product is None:
            return None

        return product["stock"]

class OrderService:

    def __init__(self, inventory):
        self.inventory = inventory
        self.orders = []

    def create_order(self, product_id, quantity):

        success = self.inventory.reserve_stock(
            product_id,
            quantity
        )

        if not success:
            return {
                "success": False,
                "message": "Estoque insuficiente"
            }

        order = {
            "id": len(self.orders) + 1,
            "product_id": product_id,
            "quantity": quantity,
            "status": "approved"
        }

        self.orders.append(order)

        return {
            "success": True,
            "order": order
        }