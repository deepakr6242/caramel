# Inheritance
#     Types of Inheritance
# Polymorphism
# Method Overriding
#     ethod Overloading
# Examples of Access Identifiers
#Multilevel Inheritance
class Home:  
    def living(self):  
        return ("Living Room built")  
 
class Bungalow():  
    def garden(self):  
        return("portico built")



class Palace():  
    def garden(self):  
        return("Palace built with garden ")

#
def foo():
        print(1) 

def foo():
    print (2)

foo()

obj=Palace()
obj1=Bungalow()
# # print (obj)
print (dir(obj))
# print (obj.living())
# print (obj.portico())
print (obj.garden())
print(obj1.garden())


# # class Second_Palace(Home,Bungalow):  
# #     def porttrt(self):  
# #         print("porttrt ")

# obj=Palace()
# obj.living()
# obj.portico()
# obj.garden()
# # sec =Second_Palace()
# # sec.porttrt()

# class Father():  
#     def driving(self):  
#         print("Father Driving")

# class Son(Father):  
#     def driving(self):  
#         print("Pillion rider")
# # ob=Son()
# # ob.driving()
# ob=Father()
# ob.driving()   
# # print(Father.__dict__)
# # print (Son.__dict__)
def foo():  
    print(1+2)

def bar():
    print("asas"+"heehhe")



