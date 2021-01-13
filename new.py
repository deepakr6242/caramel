import csv
dic= dict()
with open('demo.csv','r') as file:
	filereader = csv.DictReader(file)
	print(filereader)
	for i  in filereader:
		# print(i)
		dic =  i
print(dic)

def foo(*kwargs):
	print(kwargs)

foo(dic)