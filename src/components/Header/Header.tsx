import Button from '../../base/Button';
import { useTheme } from '../../state/ThemeContext';

export const Header = () => {
  const { theme, themes, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt='Mint logo' className="w-8 h-8 inline-block" />
        <h1 className="text-2xl md:text-3xl text-white lowercase flex items-center">
          Better<span className="font-semibold">mint</span>
        </h1>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">Theme</label>
        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          {themes.map(item => (
            <li key={item}>
              <Button variant='ghost' active={item === theme} onClick={() => setTheme(item)}>{item}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};