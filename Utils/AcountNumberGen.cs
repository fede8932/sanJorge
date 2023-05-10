namespace Repuestos_San_Jorge.Utils;

public class Utils
{
    static public string AcountNumberGen(string ident)
    {
        Random random = new Random();
        string numeroCuenta = $"{ident}-";

        for (int i = 0; i < 10; i++)
        {
            int digito = random.Next(0, 10);
            numeroCuenta += digito.ToString();
        }

        return numeroCuenta;
    }
}
