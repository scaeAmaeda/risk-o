import { Button } from '@mui/base/Button';

export default function MenuItem(props){
  return (
    <menu-item className="menu-item">
        <Button type="button">{props.name}</Button>
    </menu-item>
  )
}
