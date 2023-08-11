import { Redis } from "ioredis";
const env = require("dotenv").config().parsed;

const redisURL = env.REDIS_URL
// const redisToken = env.REDIS_TOKEN

const client = new Redis({
        maxRetriesPerRequest: 1
})

const getRedisURL = ()=>{
    if(redisURL){
        return redisURL
    }

    throw new Error("REDIS is not definded")
}

export const redis = new Redis(getRedisURL(), {
    maxRetriesPerRequest: 1,
    tls: {
        rejectUnauthorized: false
      }
})