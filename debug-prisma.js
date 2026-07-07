const pkg = require('./node_modules/@prisma/client');
console.log('PrismaClient', typeof pkg.PrismaClient, 'length', pkg.PrismaClient.length);
console.log('prismaVersion', pkg.Prisma.prismaVersion);
console.log('PrismaClient toString prefix:', pkg.PrismaClient.toString().slice(0,200));
const direct = require('./node_modules/@prisma/client/.prisma/client/index.js');
console.log('Direct PrismaClient', typeof direct.PrismaClient, 'length', direct.PrismaClient.length);
console.log('Direct PrismaClient toString prefix:', direct.PrismaClient.toString().slice(0,200));
