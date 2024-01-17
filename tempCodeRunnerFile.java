import java.io.File;
import java.io.*;
public class createfile{
  public static void main(String args[]){
    try{
      File f=new File("abc.txt");
      if(f.createnewfile()){
        System.out.println("File"+f.getname()+"is created");
      }
      else{
        System.out.println("not");
      }
    }
    catch(IOException e){
      System.out.println("error");
    }
  }
}