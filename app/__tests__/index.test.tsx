import { render } from '@testing-library/react-native';
import Index from '../index';

describe('Index Screen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Index />);

    const text = getByTestId('text');
    expect(text.props.children).toBe('Edit app/index.tsx to edit this screen.');
  });

  it('has correct styling', () => {
    const { getByTestId } = render(<Index />);
    const view = getByTestId('container');

    expect(view.props.style).toEqual({
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    });
  });
});
