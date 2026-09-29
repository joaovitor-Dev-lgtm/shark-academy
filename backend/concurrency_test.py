import threading

from legacy import create_order, state


def run_test():
    # Reset
    state["products"][1]["stock"] = 1
    state["orders"].clear()

    results = []

    def purchase():
        result = create_order(1, 1)
        results.append(result)

    thread_a = threading.Thread(target=purchase)
    thread_b = threading.Thread(target=purchase)

    thread_a.start()
    thread_b.start()

    thread_a.join()
    thread_b.join()

    print("================================")
    print("TESTE DE CONCORRÊNCIA - LEGACY")
    print("================================")

    print("Estoque inicial: 1")
    print("Pedidos simultâneos: 2")

    approved = sum(
        1
        for result in results
        if result["success"]
    )

    print(f"Pedidos aprovados: {approved}")
    print(f"Estoque final: {state['products'][1]['stock']}")
    
if __name__ == "__main__":
    run_test()
