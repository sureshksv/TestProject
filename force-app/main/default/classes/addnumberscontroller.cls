public class addnumberscontroller {
    public integer aval{set;get;}
    public integer bval{set;get;}
    public integer cval{set;get;}
        public void submit(){
            cval=aval+bval;
            //return cval;
        }
    public void reset(){
        cval=null;
        aval=null;
        bval=null;
    }

}