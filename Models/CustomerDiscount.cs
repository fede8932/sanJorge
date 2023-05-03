using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class CustomerDiscount
    {
        public int id { get; set; }

        [Required]
        public float porcentaje { get; set; }

        [Required]
        public string notas { get; set; }

        public int supplierId { get; set; }

        public Supplier supplier { get; set; }

        public int clientId { get; set; }

        public Client client { get; set; }

        public CustomerDiscount()
        {
            notas = "";
            supplier = new Supplier();
            client = new Client();
        }
    }
}
