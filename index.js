const mnist = require('mnist')
const synaptic = require('synaptic')


// Setting up trainig set
const set = mnist.set(700, 20)

const trainingSet = set.training
const testSet = set.test


// Creating neuron network
