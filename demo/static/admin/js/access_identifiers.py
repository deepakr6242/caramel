class Home:
    def __init__(self, length, breadth,width):
        self._length=length  # protected attribute 
        self.breadth=breadth # public attribute
        self.__width=width # private attribute


obj=Home(100,200,300)
print(obj._length)
print(obj.breadth)
print (obj._Home__width)
# objname._name of class__variablename


Create methods under public protected and private and access the method



