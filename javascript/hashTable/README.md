# Hashtables
Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

## Challenge
Implement a Hashtable Class with the following methods:
set , get, contains, keys, hash.

## Approach & Efficiency
### set 
- Time complexity of adding done in constant time O(1).
- space complexity is o(1) since there is no additional space being used
### get
- Time complexity is o(1) ,we dont have to loop through the table we can get the value based on the index 
- space complexity is o(n) because we will loop through the hashmap being used
### contains
- Time complexity is  o(1) ,because there is no loop
- space complexity is o(1) since there is no additional space being used
### hash
- Time complexity is o(1), because there is no loop 
- space complexity is o(1) since there is no additional space being used
### keys
- Time complexity is o(n) because we will loop through the hashmap
- space complexity is o(n) because we need an array to push the keys on it 

## API
### set 
this method should hash the key, and set the key and value pair in the table, handling collisions as needed.should a given key already exist, replace its value from the value argument given to this method.
### get
this method returns: Value associated with that key in the table
### contains
this method returns: Boolean, indicating if the key exists in the table already.
### keys
this method returns: Collection of keys
### hash
this method returns: Index in the collection for that key