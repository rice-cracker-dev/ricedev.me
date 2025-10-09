{
  stdenv,
  nodejs,
  pnpm,
}:
stdenv.mkDerivation (finalAttrs: {
  pname = "foo";
  version = "0-unstable-1980-01-01";

  src = ../.;

  nativeBuildInputs = [
    nodejs
    pnpm.configHook
  ];

  pnpmDeps = pnpm.fetchDeps {
    inherit (finalAttrs) pname version src;
    fetcherVersion = 2;
    hash = "sha256-91I/oA7hVKcSE4pDg3WpPxNJyqE7lcY7ZSSME/LHZ1I=";
  };

  buildPhase = ''
    runHook preBuild

    pnpm run build --outDir $out

    runHook postBuild
  '';
})
