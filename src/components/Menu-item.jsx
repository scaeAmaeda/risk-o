import { Button } from '@mui/base/Button';
import { CheckOutlined, CloseOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons";

const icons = {
  CheckOutlined: CheckOutlined,
  CloseOutlined: CloseOutlined,
  ReloadOutlined: ReloadOutlined,
  SearchOutlined: SearchOutlined,
};

export default function MenuItem({ icon, name }) {
  const IconComponent = icons[icon];

  if (!IconComponent) return null;

  return (
    <menu-item className="menu-item">
      <Button type="button">
        <IconComponent />
        <span>{name}</span>
      </Button>
    </menu-item>
  );
}
