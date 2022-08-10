import { cleanup, render, screen } from '@testing-library/react';
import { Default } from './EmptyCard.stories';

afterEach(cleanup);

// test("renders without crashing", () => {
// 	const div = document.createElement("div");
// 	ReactDOM.render(<Default {...Default.args} />, div);
// });

// test("matches snapshot", () => {
// 	const tree = renderer.create(<Default {...Default.args} />).toJSON();
// 	expect(tree).toMatchSnapshot();
// });

describe('EmptyCard', () => {
  it('renders', () => {
    render(<Default {...Default.args} />);
    expect(screen.queryAllByText('Empty')).toHaveLength(0);
  });
});
