import React from 'react';
import { shallow } from 'enzyme';
import Advert from './Advert'

describe('Advert', () => {

    it('should render Advert component', () => {
        const props = {
            key: 0,


            advert: {
                _id: "5db5cd0a0a16ec2c68e2d96d",
                userOwner: "5e4ea39aba7b0d31e8bba424",
                name: "BMW X6 M",
                description: "Soy el del apartamento. Con eso lo digo todo.",
                photo: "/images/anuncios/x6.jpg",
                type: "sale",
                price: 40000,
                tags: ["lifestyle", "motor"],
                reserved: false,
                sold: false,
            }

        }
        const wrapper = shallow(<Advert {...props} />);

        expect(wrapper).toMatchSnapshot();

    });

});
