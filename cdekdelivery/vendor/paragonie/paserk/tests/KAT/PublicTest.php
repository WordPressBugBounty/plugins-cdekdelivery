<?php
declare(strict_types=1);
namespace ParagonIE\Paserk\Tests\KAT;

use Exception;
use FG\ASN1\Exception\ParserException;
use ParagonIE\ConstantTime\Hex;
use ParagonIE\Paserk\PaserkException;
use ParagonIE\Paserk\Tests\KnownAnswers;
use ParagonIE\Paserk\Types\PublicType;
use ParagonIE\Paseto\Exception\PasetoException;
use ParagonIE\Paseto\Keys\AsymmetricPublicKey;
use ParagonIE\Paseto\ProtocolInterface;
use ParagonIE\Paseto\Protocol\{
    Version1,
    Version2,
    Version3,
    Version4
};

/**
 * @covers Public
 */
class PublicTest extends KnownAnswers
{
    public function testV1()
    {
        $this->doJsonTest(new Version1(), 'k1.public.json');
    }

    public function testV2()
    {
        $this->doJsonTest(new Version2(), 'k2.public.json');
    }

    public function testV3()
    {
        $this->doJsonTest(new Version3(), 'k3.public.json');
    }

    public function testV4()
    {
        $this->doJsonTest(new Version4(), 'k4.public.json');
    }

    protected function getPublicKey(ProtocolInterface $version, string $key): AsymmetricPublicKey
    {
        if ($version instanceof Version1) {
            return new AsymmetricPublicKey($key, $version);
        }
        return new AsymmetricPublicKey(Hex::decode($key), $version);
    }

    /**
     * @throws PaserkException
     * @throws Exception
     */
    protected function genericTest(ProtocolInterface $version, string $name, array $tests): void
    {
        $public = (new PublicType($version));
        foreach ($tests as $test) {
            if ($test['expect-fail']) {
                if (!empty($test['paserk'])) {
                    try {
                        $public->decode($test['paserk']);
                        $this->fail($test['name'] . ': ' . $test['comment']);
                    } catch (ParserException | \RangeException | PasetoException | PaserkException $ex) {
                    }
                    continue;
                }

                try {
                    $publickey = $this->getPublicKey($version, $test['key']);
                    $public->encode($publickey);
                    $this->fail($test['name'] . ': '. $test['comment']);
                } catch (ParserException | \RangeException | PasetoException | PaserkException $ex) {
                }
                continue;
            }

            $publickey = $this->getPublicKey($version, $test['key']);
            $this->assertSame(
                $test['paserk'],
                $public->encode($publickey),
                $test['name']
            );
        }
    }
}
