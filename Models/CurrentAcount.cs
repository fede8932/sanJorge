using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class CurrentAcount
    {
        [Key]
        public int id { get; set; }
        public int movementId { get; set; }

        public Client client { get; set; }

        [ForeignKey("movementId")]
        public Movement movement { get; set; }

        // public CurrentAcount()
        // {
        //     client = new Client();
        //     movement = new Movement();
        // }
    }
}
