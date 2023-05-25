using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class Voucher
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string numRemito { get; set; }

        [Required]
        public Boolean afip { get; set; }

        [Required]
        public DateTime fecha { get; set; }

        [Required]
        public string type { get; set; }

        [Required]
        public float subtotal { get; set; }

        [Required]
        public float iva { get; set; }

        [Required]
        public float total { get; set; }
        public int? purchaseOrderId { get; set; }

        [ForeignKey("purchaseOrderId")]
        public PurchaseOrder? purchaseOrder { get; set; }
    }
}
