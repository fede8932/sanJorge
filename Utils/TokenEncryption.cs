using System;
using System.Security.Cryptography;
using System.Text;

public class TokenEncryption
{
    private static readonly byte[] Key = Encoding.UTF8.GetBytes(
        "aquí_ingresa_tu_clave_secreta_de_cifrado"
    );
    private static readonly byte[] IV = Encoding.UTF8.GetBytes(
        "aquí_ingresa_tu_vector_de_inicialización"
    );

    public static string EncryptToken(string token)
    {
        using (var aes = Aes.Create())
        {
            aes.Key = Key;
            aes.IV = IV;

            var encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

            byte[] encryptedBytes;

            using (var memoryStream = new System.IO.MemoryStream())
            {
                using (
                    var cryptoStream = new CryptoStream(
                        memoryStream,
                        encryptor,
                        CryptoStreamMode.Write
                    )
                )
                {
                    byte[] tokenBytes = Encoding.UTF8.GetBytes(token);
                    cryptoStream.Write(tokenBytes, 0, tokenBytes.Length);
                    cryptoStream.FlushFinalBlock();
                    encryptedBytes = memoryStream.ToArray();
                }
            }

            return Convert.ToBase64String(encryptedBytes);
        }
    }

    public static string DecryptToken(string encryptedToken)
    {
        byte[] encryptedBytes = Convert.FromBase64String(encryptedToken);

        using (var aes = Aes.Create())
        {
            aes.Key = Key;
            aes.IV = IV;

            var decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

            using (var memoryStream = new System.IO.MemoryStream(encryptedBytes))
            {
                using (
                    var cryptoStream = new CryptoStream(
                        memoryStream,
                        decryptor,
                        CryptoStreamMode.Read
                    )
                )
                {
                    byte[] decryptedBytes = new byte[encryptedBytes.Length];
                    int decryptedByteCount = cryptoStream.Read(
                        decryptedBytes,
                        0,
                        decryptedBytes.Length
                    );
                    return Encoding.UTF8.GetString(decryptedBytes, 0, decryptedByteCount);
                }
            }
        }
    }
}
