class Product:

  def __init__(self, name, price, deal_price, ratings): #class init
    self.name = name
    self.price = price
    self.deal_price = deal_price
    self.ratings = ratings
    self.you_save = price - deal_price

  def display_product_details(self):
      print("Product: {}".format(self.name))
      print("Price: {}".format(self.price))
      print("Deal Price: {}".format(self.deal_price))
      print("You Saved: {}".format(self.you_save))
      print("Ratings: {}".format(self.ratings))

  def get_deal_price(self):
    return self.deal_price

class ElectronicItem(Product):
  def __init__(self, name, price, deal_price, ratings, warranty_in_months):
    super().__init__(name, price, deal_price, ratings)
    self.warranty_in_months = warranty_in_months
  def display_product_details(self):
    super().display_product_details()
    print("Warranty {} months ".format(self.warranty_in_months))


class GroceryItem(Product):
  def __init__(self, name, price, deal_price, ratings, Expiry_date):
    super().__init__(name, price, deal_price, ratings)
    self.Expiry_date = Expiry_date
  def display_product_details(self):
    super().display_product_details()
    print("Expiry Date : {}".format(self.Expiry_date))

class laptop(ElectronicItem):
  def __init__(self, name, price, deal_price, ratings, warranty_in_months, ram, storage):
    super().__init__(name, price, deal_price, ratings, warranty_in_months)
    self.ram = ram
    self.storage = storage
  def display_product_details(self):
    super().display_product_details()
    print("Ram: {}".format(self.ram))
    print("Storage: {}".format(self.storage))

class Order:
  Delivary_charges = {
    "Normal":0,
    "Prime Delivary":100
  }
  def __init__(self, Delivary_speed, Delivary_address):
    self.items_in_cart = []
    self.Delivary_address = Delivary_address
    self.Delivary_speed = Delivary_speed
  def add_items(self, product, quantity):
    item = (product, quantity)
    self.items_in_cart.append(item)
  def display_order_details(self):
    print("Delivary Method:{}".format(self.Delivary_speed))
    print("Delivary Address:{}".format(self.Delivary_address))
    print("Products")
    print("-----------------------------")
    for product, quantity in self.items_in_cart:
      product.display_product_details()
      print("Quantity:{}".format(quantity))
      print("")
    print("------------------------------")
    total_bill = self.get_total_bill()
    print("Total Bill:{}".format(total_bill))

  def get_total_bill(self):
    total_bill = 0
    for product, quantity in self.items_in_cart:
      total_bill = total_bill + product.get_deal_price() * quantity
    order_delivary_charges = Order.Delivary_charges[self.Delivary_speed]
    total_bill = total_bill + order_delivary_charges
    return total_bill
  @classmethod
  def update_delivary_charges(cls, Delivary_speed, charges):

    cls.Delivary_charges[Delivary_speed] = charges


e = ElectronicItem("Laptop",45000, 40000,3.5, 23)


g = GroceryItem("Milk", 45, 40, 3.7, "Feb 2024")
my_order = Order("Normal", "Kurnool")
my_order.add_items(e, 1)
my_order.add_items(g, 5)
Order.update_delivary_charges("Normal", 50)


lenovo_lap = laptop("Lenovo 252", 45000, 40000, 4.5, 24, "16 GB", "1TB SSD")
lenovo_lap.display_product_details()

