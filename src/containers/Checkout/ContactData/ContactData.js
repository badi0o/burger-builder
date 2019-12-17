import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Helo Belo',
                address: {
                    street: 'teststreet',
                    zipCode: '430290',
                    country: 'Kurdistan'
                },
                email: 'test@tes.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            });

    }

    render() {
        let form = (<form action="">
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="name" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="postal code" />
            <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
        </form>
        );
        if (this.state.loading) {
            return (
                <Spinner />
            )
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
};

export default ContactData;