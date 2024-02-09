class Cart:
  def __init__(self):
    self.items = {}
    self.price_details = {'books'}
  def add_item(self, item_name, quantity):
    self.items[item_name] = quantity
  def remove_item(self, item_name):
    del self.items[item_name]

  def update_quantity(self, item_name, quantity):
    self.items[item_name] = quantity

  def get_items(self):
    items_list = []
    items_list = list(self.items.keys())
    print(items_list)



cart_obj = Cart()
cart_obj.add_item("books", 15)
cart_obj.get_items()
cart_obj.add_item("laptop", 20)
cart_obj.get_items()
cart_obj.update_quantity("book", 2)
cart_obj.get_items()

