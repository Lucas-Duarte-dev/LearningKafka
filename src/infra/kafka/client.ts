import kafka from 'kafka-node';

const client = new kafka.KafkaClient({
    clientId: 'kafka'
})

export default client;