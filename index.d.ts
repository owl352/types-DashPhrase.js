export = DashPhrase;

declare namespace DashPhrase {
    type Options = {
        verify?: boolean;
    }


    function generate(bitLen: number): string;
    function encode(bytes: Uint8Array): string;
    function verify(recoveryPhrase: string): boolean;
    function decode(recoveryPhrase: string, opts?: Options): Uint8Array;
    function toSeed(recoveryPhrase: string, salt?: string, opts?: Options): Uint8Array;
}
