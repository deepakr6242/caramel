 # # Lambda map filter reduce in python 
 # Lambda
 # an Operator  or a function
 # used for creating a small use and throw function or anonymous function

 # Lambda argument/parameter : expression/operation 

#Lambda Example:

def sub(a,b):
 	 return a-b


print(sub(5,2))
print (type(sub(5,2)))


sub12 = lambda a,b : a-b

print (sub12(5,2))

print (type(sub12))

print (dir((type(sub12))))

# Map
# Map expects a function and iterables (list/dict)
# It exefcute sthe function using te elemnets in the iterables

#map(function/function_object,iterable)

# Disclaimer there is a difference in map between 2.7 and 3
# map is returning a generator function_object
# Generator s the moste efficent way of handling the  iterable data
# Generator in python  used using keyword a called Yield

def bar():
	yield 2
	yield 3

print(bar())

# for i in bar():
# 	print (i) 


# def foo(x):
# 	return x+1



# x = map(lambda x : x+1,[1,2])

# #x is an iterable object
# for i in x:
# 	print ((i))

#filter
# filter also need two raguments
# filter(function_object,iterable)
# rturns a iterable
a=[5,6,7,8,9]

for i in  (map(lambda x :x>6,a)):
	print (i)


