using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class CustomerDiscount
    {
        [Key]
        public int id { get; set; }

        [Required]
        public float porcentaje { get; set; }

        [Required]
        public string notas { get; set; }

        public int supplierId { get; set; }

        [ForeignKey("supplierId")]
        public Supplier? supplier { get; set; }

        public int clientId { get; set; }

        [ForeignKey("clientId")]
        public Client? client { get; set; }

        // public CustomerDiscount()
        // {
        //     notas = "";
        //     supplier = new Supplier();
        //     client = new Client();
        // }
    }
}
