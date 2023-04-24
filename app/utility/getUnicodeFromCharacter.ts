export function getUnicodeFromCharacter(character: string): number {
	const normalizedChar = character.normalize();

	if (normalizedChar.length === 0) throw new Error("Argument cannot be an empty string");
	if (normalizedChar.length > 1) throw new Error("Argument must be a single character string");

	return normalizedChar.codePointAt(0)!;
}
