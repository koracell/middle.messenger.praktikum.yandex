import Block from '../block';
import tmpl from '../../components/field/field.hbs'
import '../../components/field/field.scss'


export class Field extends Block {
   constructor(props) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}