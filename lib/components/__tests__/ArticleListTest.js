import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article'
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ArticleList', ()=> {

    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        },
    }

    it('Renders correctly', ()=> {
        const wrapper= shallow(
            <ArticleList
                {...testProps}
             />
        );
        
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper.getElement()).toMatchSnapshot();
    })
})