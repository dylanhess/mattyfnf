const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
client.login('ODE5Nzg1NDc2MzExNDgyMzc4.YErquA.LWaFcyZwV-SuesYOKXatqlPNRJc')
const emoji = require('node-emoji');
const airplane = emoji.get('airplane');

client.on('ready', () => {
    console.log('Connected as ' + client.user.tag)

    client.user.setActivity('MattyFNF - Fuck You')
})

client.on('message', message => {
    if (message.content === '!doc') {
        message.channel.send('https://docs.google.com/document/d/1MbXJiKWDA95Ngfewx7Q8cOsAshMDR9VLx5DEirQxd24/edit')
    }
})

client.on('message', message => {
    if (message.content === '!sos') {
        message.channel.send('https://tenor.com/view/venezuela-sos-venezuela-sos-poverty-sleeping-gif-17359352')
    }
})

client.on('message', message => {
    if (message.content === emoji.get('airplane')) {
        message.channel.send('https://media.discordapp.net/attachments/618623099239137281/819793332561510410/image0.png')
    }
})

client.on('message', message => {
    if (message.content === '!AG') {
        message.channel.send('<@409461832202321941> <@200849703225655296> give me free proxies mf')
    }
})

client.on('message', message => {
    if (message.content === '!snits') {
        message.channel.send('https://media.discordapp.net/attachments/819676818084855828/819682087740244038/unknown.png')
    }
})

client.on('message', message => {
    if (message.content === '!pain') {
        message.channel.send('https://cdn.discordapp.com/attachments/819676818084855828/819681530028490802/video0.mov')
    }
})

client.on('message', message => {
    if (message.content === '!cooler') {
        message.channel.send('https://cdn.discordapp.com/attachments/819676818084855828/819800915954761749/image0.png')
    }
})

client.on('message', message => {
    if (message.content === '!mattworking') {
        message.channel.send('https://cdn.discordapp.com/attachments/819676818084855828/819800923484323860/image0.png')
    }
})

client.on('message', message => {
    if (message.content === '!beans') {
        message.channel.send('https://cdn.discordapp.com/attachments/618623099239137281/819808187199914024/image0.png')
    }
})

client.on('message', message => {
    if (message.content === '!commands') {
        const commands = new Discord.MessageEmbed()
            .setColor('#c22f4a')
            .setTitle('Command List')
            .setDescription('**!doc\n!beans\n!sos\n**' + emoji.get('airplane') + '\n**!AG\n!snits\n!pain\n!cooler\n!mattworking\n!checkout**')
            /*.addFields(
                { name : '!doc', value :' '},
                { name : '!sos', value :' '},
                { name : emoji.get('airplane'), value :' '},
                { name : '!AG', value :' '},
                { name : '!snits', value :' '},
                { name : '!pain', value :' '},
                { name : '!cooler', value :' '},
                { name : '!mattworking', value :' '} 
            )*/
            .setFooter('MattyFNF - Fuck You')
            .setThumbnail('https://cdn.discordapp.com/attachments/785354041005572106/785362408742846484/image0.jpg')
            message.channel.send(commands)
    }
})

client.on('message', message => {
    if (message.content === '!checkout') {
        const checkout = new Discord.MessageEmbed()
            .setColor('#4585d9')
            .setTitle('Successful Checkout')
            .addFields(
                { name : 'Store', value : 'null', inline:true},
                { name : 'Price', value : '$170', inline:true},
                { name : 'Size', value : 'Random', inline:true},
                { name : 'Profile', value : '||xxxxxxxxx||', inline:true},
            )
            .setThumbnail('https://cdn.discordapp.com/attachments/785354041005572106/785362408742846484/image0.jpg')
            .setFooter('MattyFNF - Fuck You')
            message.channel.send(checkout)
    }
})