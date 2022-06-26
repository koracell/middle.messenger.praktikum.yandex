import Block from '../block';
import tmpl from '../../components/field/field.hbs'
import '../../components/field/field.scss'

interface FieldProps {
   className: string;
   name: string;
   placeholder?: string;
   events?: any;
}

export class Field extends Block {
   constructor(props: FieldProps) {
      super(props);
   }

   public setValue(value: string) {
      (this.element as HTMLInputElement).value = value;
   }

   render() {
      return this.compile(tmpl, {...this.props})
   }
}