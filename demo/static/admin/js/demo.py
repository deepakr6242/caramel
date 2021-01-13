  
# import boto3
# #from boto import resource
# #from boto.dynamodb.conditions import Key
# client = boto3.resource('dynamodb',region_name='us-east-1')
# print (dir(client))

# x= client.Table('Employee')
# print (dir(x))
# # print (x.get_item(Key={'Empd': '732142'}))
# print(x.table_id)

  
# import boto3
# #from boto import resource
# #from boto.dynamodb.conditions import Key
# client = boto3.resource('dynamodb',region_name='N.Virgin')
# print dir(client)

# x= client.Table('Employee')
# print dir(x)
# print x.get_item(Key={'Empd': '732142'}'

from math import *
  
def secret_function(): 
    return "Secret key is 1234"
  
def function_creator(): 
  
    # expression to be evaluated 
    expr = input("Enter the function(in terms of x):") 
  
    # variable used in expression 
    x = int(input("Enter the value of x:")) 
  
    # evaluating expression 
    y = eval(expr) 
  
    # printing evaluated result 
    print("y = {}".format(y)) 
from itertools import combinations
def show100(x):
	temp = []
	counter = 0
	while counter<x:
		# print (counter,counter+1)
		counter = counter+1
		if counter<=10:
			print (counter)
		elif counter>10:
			# print (str(counter))
			temp.append(counter)
	print (temp)

	
	print(list(combinations(temp, 3)))
				# print(list(combinations(str(i).split(','), len(str(counter)))))

		
				
			
	# for counter,number in enumerate(range(x)):
	# 	print(counter,number)
x = [11,12]	

for i in str(x):
	print (i,end="")

  
if __name__ == "__main__": 
    # function_creator()
    show100(105)
