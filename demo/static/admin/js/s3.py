import boto3
import os
boto3.set_stream_logger('botocore', level='DEBUG')
# print (os.getenv('AWS_SHARED_CREDENTIALS_FILE'))
s3 = boto3.client('s3')
response = s3.list_buckets()


# Output the bucket names
print('Existing buckets:')
for bucket in response['Buckets']:
    print(f'  {bucket["Name"]}')

location = {'LocationConstraint': 'eu-west-1'}
#creating Buckets:
s3.create_bucket(Bucket="deepakr624212345nsdjhd",
                                    CreateBucketConfiguration=location)





#Manually giving the access Key

# import boto
# import boto.s3.connection
# print ("Connectiing")

# conn = boto.connect_s3(
#         aws_access_key_id = "AKIAVLUCZX2HIJBS7A5Q",
#         aws_secret_access_key = "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",
#         )

# for bucket in conn.get_all_buckets():
#         print  (bucket.name,bucket.creation_date)
# https://docs.aws.amazon.com/code-samples/latest/catalog/code-catalog-python-example_code-s3.html



import boto3
import boto.s3.connection
print "Connectiing"

conn = boto3.connect_s3(
        aws_access_key_id = "AKIAVLUCZX2HIJBS7A5Q",
        aws_secret_access_key = "VpG6x7ABjOZMfxPYnG466xwNqWspl3w89rGAZJKv",
        )

for bucket in conn.get_all_buckets():
        print  bucket.name,bucket.creation_date

#creating  Bucket
import uuid
def create_bucket_name(bucket_prefix):
    # The generated bucket name must be between 3 and 63 chars long
    return ''.join([bucket_prefix, str(uuid.uuid4())])
print create_bucket_name("dexter")
conn.create_bucket(create_bucket_name("dexter"),CreateBucketConfiguration={
                              'LocationConstraint': 'eu-west-1'})