const {DataTypes} = require('sequelize')
const sequelize = require('../utils/db')


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER",
        allowNull: false
    }
})



const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
})



const BasketToy = sequelize.define('basket_toy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
})

const BasketService = sequelize.define('basket_service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
})



const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }
})



const OrderToy = sequelize.define('order_toy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: false
    }
})

const OrderService = sequelize.define('order_service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: false
    }
})



const Toy = sequelize.define('toy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
})



const Service = sequelize.define('service', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


User.hasOne(Order)
Order.belongsTo(User)

Order.hasMany(OrderToy, {as: 'orderToys', unique:false})
OrderToy.belongsTo(Order)

Order.hasMany(OrderService, {as: 'orderService', unique:false})
OrderService.belongsTo(Order)

Toy.hasMany(OrderToy, {as: 'order_toys', unique:false})
OrderToy.belongsTo(Toy)

Service.hasMany(OrderService, {as: 'order_services', unique:false})
OrderService.belongsTo(Service)

Toy.belongsToMany(Order, {
    through: {
        model: OrderToy,
        unique: false
    },

})

Order.belongsToMany(Toy, {
    through: {
        model: OrderToy,
        unique: false
    },

}) // A BelongsToMany B through the junction table C

Order.belongsToMany(Service, {
    through: {
        model: OrderService,
        unique: false
    },

})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketToy, {as: 'basketToys'})
BasketToy.belongsTo(Basket)

Basket.hasMany(BasketService, {as: 'basketServices'})
BasketService.belongsTo(Basket)

Type.hasMany(Service, {as: 'servicesData'})
Service.belongsTo(Type)

Toy.hasMany(BasketToy, {as: 'toys'})
BasketToy.belongsTo(Toy)

Service.hasMany(BasketService, {as: 'services'})
BasketService.belongsTo(Service)



Toy.belongsToMany(Basket, {
    through: {
        model: BasketToy,
        unique: false
    },

})

Basket.belongsToMany(Toy, { through: BasketToy }) // A BelongsToMany B through the junction table C
Basket.belongsToMany(Service, { through: BasketService })


module.exports = {
    User, Basket, BasketToy, BasketService, Toy, Service, Type, Order, OrderService, OrderToy
}