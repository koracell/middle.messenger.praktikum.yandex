import Block from '../block';
import tmpl from '../../components/field/field.hbs'
import '../../components/field/field.scss'

interface FieldProps {
   className: string;
   name: string;
   placeholder?: string;
}

export class Field extends Block {
   constructor(props: FieldProps) {
      super(props);
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}