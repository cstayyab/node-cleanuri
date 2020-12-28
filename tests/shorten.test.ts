import { shorten } from '../index';

test("Valid URL", () => {
    expect(shorten(new URL("https://cstayyab.com"))).resolves.toBeInstanceOf(URL);
});