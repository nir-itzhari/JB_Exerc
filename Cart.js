let myOrder
let lastOrderId = 1;
const itemsList = [
    new item(5, "PC", 5700),
    new item(2, "TV", 3700),
    new item(3, "XBOX", 2500)
]


function Address(city, street, buildingNumber) {
    this.city = city
    this.street = street
    this.buildingNumber = buildingNumber
}

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}


function Customer(firstName, lastName, city, street, buildingNumber) {
    Person.call(this, firstName, lastName)
    this.Address = new Address(city, street, buildingNumber)

}
Customer.prototype = Object.create(Person.prototype)
Customer.prototype.CustomerDetails = function () {
    return this.firstName + ' ' + this.lastName
}

function item(itemID, itemName, itemPrice) {
    this.itemID = itemID
    this.itemName = itemName
    this.itemPrice = itemPrice
}

function Order(orderID, customerDetails) {
    this.items = []
    this.orderID = orderID
    this.customerDetails = customerDetails
}

Order.prototype.addItemToOrder = function (itemID, itemName, itemPrice) {
    this.items.push(
        new item(itemID, itemName, itemPrice)
    )
}
Order.prototype.getTotalPrice = function () {
    let itemsPrice = 0

    for (let item of this.items) {
        itemsPrice += +item.itemPrice
    }
    return itemsPrice
}

function UiRender() {
    this.renderReadPerson = function () {
        //const divPerson = $("<div/>").attr('id', 'person').appendTo('#cart')
        const firstNameLabel = $('<lable/>').text('First Name:')
        firstNameLabel.attr('for', 'firstName')
        const firsNameInput = $("<input/>").attr('name', 'firstName')
        const lastNameLabel = $('<lable/>').text('Last Name:')
        lastNameLabel.attr('for', 'city')
        const lastNameInput = $("<input/>").attr('name', 'lastName')
        $('#cart').append(firstNameLabel, firsNameInput, lastNameLabel, lastNameInput)
    }
    this.renderReadAddress = function () {
        //   const divAddressContainer = $("<div/>")
        const cityLabel = $('<lable/>')
        cityLabel.text('City:')
        cityLabel.attr('for', 'city')
        const InputCity = $("<input/>")
        InputCity.attr('type', 'text')
        InputCity.attr('name', 'city')
        const streetLabel = $('<lable/>')
        streetLabel.text('Street:')
        streetLabel.attr('for', 'street')
        const InputSteet = $("<input/>")
        InputSteet.attr('type', 'text')
        InputSteet.attr('name', 'street')
        const buildingNumberLabel = $('<lable/>')
        buildingNumberLabel.text('Building Number:')
        buildingNumberLabel.attr('for', 'buildingNumber')
        const buildingNumberInput = $("<input/>")
        buildingNumberInput.attr('type', 'text')
        buildingNumberInput.attr('name', 'buildingNumber') //.text(address.buildingNumber)
        $('#cart').append(cityLabel, InputCity, streetLabel, InputSteet, buildingNumberLabel, buildingNumberInput,)
    }
    this.renderReadItem = function () {
        const select = $('<select/>')
        select.attr("id", "SelecteProduct")
        select.attr("name", "SelecteProduct")

        for (let item of itemsList) {
            const opt = $('<option/>')
            opt.attr("data-id", item.itemID)
            opt.attr("data-name", item.itemName)
            opt.attr("data-price", item.itemPrice)
            opt.text(item.itemName + ": " + item.itemPrice + "₪")
            opt.appendTo(select)
        }
        select.appendTo('#cart')
    }
    this.renderReadAll = function () {
        rendeR.renderReadPerson()
        rendeR.renderReadAddress()
        rendeR.renderReadItem()

        const btn = $('<button/>').on('click', function (event) {
            event.preventDefault()
            const form = document.querySelector('form')
            const firstName = form.elements.firstName.value
            const lastName = form.elements.lastName.value
            const city = form.elements.city.value
            const street = form.elements.street.value
            const buildingNumber = parseFloat(form.elements.buildingNumber.value)

            const myCustomer = new Customer(firstName, lastName, city, street, buildingNumber)
            if (myOrder == undefined) {
                myOrder = new Order(lastOrderId++, myCustomer)
            } else {
                myOrder.customerDetails = myCustomer
            }
            const select = $("#SelecteProduct option:selected")
            const data_id = $(select).attr('data-id')
            const data_name = $(select).attr('data-name')
            const data_price = $(select).attr('data-price')
            myOrder.addItemToOrder(data_id, data_name, data_price)
            updateOrderItems()

            return myCustomer
        }).html('Save')
        btn.appendTo($('#cart'));
    }
}
const rendeR = new UiRender()
rendeR.renderReadAll()


function updateOrderItems() {
    let listOfItems = `<table><thead>
                        <tr>
                            <th>ItemID</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr></thead>`
    for (let item of myOrder.items) {
        listOfItems += `<tr>
                            <td>${item.itemID}</td>
                            <td>${item.itemName}</td>
                            <td>${item.itemPrice}₪</td>
                        </tr>`
    }
    listOfItems += '</table>'
    $('#itemslist').html(listOfItems)
}
const showBtn = $('<button/>').on('click', function (event) {
    event.preventDefault()
    const OrderDetails =
        `
<h5>Customer Details</h5>
<div>
  <p>
  First Name : ${myOrder.customerDetails.firstName}
  </p>
  <p>
  Last Name : ${myOrder.customerDetails.lastName}.
  </p>
</div>
<h5>Shipping Address</h5>
<div>
<p>
City : ${myOrder.customerDetails.Address.city}.
</p>
<p>
Street : ${myOrder.customerDetails.Address.street}.
</p>
<p>
Building Number : ${myOrder.customerDetails.Address.buildingNumber}.
  </p>
</div>
<h5>Items To Order</h5>
<div>
<span>
  Order ID : ${myOrder.orderID}.
</span>
<div id="itemslist">
</div>
</div>

</div>
`
    if ($('#itemslist').length > 0) {
        $('#accordion').accordion('destroy').empty();
    }
    $('#accordion').html(OrderDetails)

    $('#accordion').accordion();
    updateOrderItems()
}).html('Show Order')
$('form').append(showBtn)
const orderAndcustomerDetails = $('<div/>').attr('id', 'accordion')
orderAndcustomerDetails.appendTo('body')




