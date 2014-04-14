from pymongo import MongoClient
from bson.objectid import ObjectId as objectid

client = MongoClient('50.112.197.183', 27017)

db = client.elephant_data

missions = db.missions

def de_id(doc):
    doc['_id'] = str(doc['_id'])
    return doc

def get_all(delim=False):
    """get all missions in database"""
    if delim:
        return map(de_id,list(missions.find({},{x:1 for x in delim})))
    return map(de_id,list(missions.find()))

def insert(data):
    """insert a mission to the database"""
    missions.insert({x[0]:x[1] for x in data.items() if x[1] != ""})

def get_single(mission_id,delim=False,confirm=False):
    if delim:
        if confirm:
            tmp = missions.find_one({'_id':objectid(mission_id)},{'_id':0})
            return dict({x:tmp.get(x) for x in delim}.items()+{x:True for x in confirm if tmp.has_key(x)}.items())
        return missions.find_one({'_id':objectid(mission_id)},dict({x:1 for x in delim}.items()+{'_id':0}.items()))
    return missions.find_one({'_id':objectid(mission_id)},{'_id':0})

