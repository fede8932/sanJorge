using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class PurchaseOrder
    {
        [Key]
        public int id { get; set; }

        [Required]
        public DateTime date { get; set; }

        [Required]
        public string status { get; set; }

        [Required]
        public float total { get; set; }

        public int? supplierId { get; set; }

        public ICollection<PurchaseOrderItem>? purchaseOrderItems { get; set; }

        public Voucher? Voucher { get; set; }

        public ControlOrder? controlOrder { get; set; }
    }
}
