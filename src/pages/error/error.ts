import Block from '../../components/block'

import tmpl from './error.hbs'
import './error.scss';

export class ErrorPage extends Block {
    constructor() {
        super();
    }
    
    render(): any {
        const current_path: string = window.location.pathname
        
        switch (current_path) {
            case ('/500'):
                return this.compile(tmpl, { errorStatus: '500', errorMessage: 'Мы уже фиксим' })    
            case ('/404'):
                return this.compile(tmpl, { errorStatus: '404', errorMessage: 'Не туда попали' })    
        }
        
    }
}